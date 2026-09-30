import React from 'react';
import { ImageBackground, StyleSheet, View, useWindowDimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Circle, Path } from 'react-native-svg';
import { IMG } from '../assets';
import { C, GRAD_BG, GRAD_BG_GAME, GRAD_VIGNETTE, VERT, VERT_END, DIAG, DIAG_END } from '../constants/theme';

export type BackgroundVariant = 'loader' | 'menu' | 'game' | 'result';

type Props = {
  variant: BackgroundVariant;
  children: React.ReactNode;
};

const SOURCES: Record<BackgroundVariant, any> = {
  loader: IMG.bgLoader,
  menu: IMG.bgMenu,
  game: IMG.bgGame,
  result: IMG.bgMenu,
};

const OVERLAY: Record<BackgroundVariant, string> = {
  loader: 'rgba(11,6,16,0.88)',
  menu: 'rgba(22,12,24,0.62)',
  game: 'rgba(22,12,24,0.72)',
  result: 'rgba(11,6,16,0.80)',
};

/**
 * Deterministic pseudo-random so the decorative grain is stable across frames
 * (a static layer keeps the render thread idle for the capture harness).
 */
function xorshift(seed: number): () => number {
  let x = seed | 0 || 0x2545f491;
  return () => {
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    return ((x >>> 0) % 100000) / 100000;
  };
}

/**
 * Grain is drawn as a handful of Path nodes instead of one Circle per dot.
 * A thousand circle elements means a thousand native RNSVG views built during the
 * very first render, which stalls the UI thread long enough that the app misses
 * its foreground window. Four paths paint the same pixels for four views.
 */
function dotsPath(rnd: () => number, width: number, height: number, count: number) {
  const parts: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = (rnd() * width).toFixed(1);
    const y = (rnd() * height).toFixed(1);
    const s = (1.4 + rnd() * 1.8).toFixed(1);
    parts.push(`M${x} ${y}h${s}v${s}h-${s}z`);
  }
  return parts.join("");
}

const Grain = React.memo(function Grain({ width, height, count }: { width: number; height: number; count: number }) {
  // Hold the grain back by one frame so the first paint is never blocked by it.
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const layers = React.useMemo(() => {
    if (!ready || width <= 0 || height <= 0) {
      return null;
    }
    const rnd = xorshift(0x5eed01);
    const quarter = Math.max(1, Math.round(count / 4));
    return [
      { d: dotsPath(rnd, width, height, quarter), fill: "#FFD76A", o: 0.3 },
      { d: dotsPath(rnd, width, height, quarter), fill: "#FFD76A", o: 0.14 },
      { d: dotsPath(rnd, width, height, quarter), fill: "#D45BF0", o: 0.26 },
      { d: dotsPath(rnd, width, height, quarter), fill: "#D45BF0", o: 0.11 },
    ];
  }, [ready, width, height, count]);

  if (!layers) {
    return null;
  }

  return (
    <Svg width={width} height={height} style={StyleSheet.absoluteFill}>
      {layers.map((l, i) => (
        <Path key={i} d={l.d} fill={l.fill} fillOpacity={l.o} />
      ))}
    </Svg>
  );
});

export default function AppBackground({ variant, children }: Props) {
  const { width, height } = useWindowDimensions();
  const isGame = variant === 'game';
  const grad = isGame ? GRAD_BG_GAME : GRAD_BG;
  const grainCount = variant === 'loader' ? 1300 : 180;

  return (
    <ImageBackground source={SOURCES[variant]} resizeMode="cover" style={styles.root}>
      <View style={[StyleSheet.absoluteFill, { backgroundColor: OVERLAY[variant] }]} />
      <LinearGradient
        colors={grad}
        start={isGame ? DIAG : VERT}
        end={isGame ? DIAG_END : VERT_END}
        locations={isGame ? [0, 0.62, 1] : undefined}
        style={[StyleSheet.absoluteFill, { opacity: variant === 'menu' ? 0.55 : 0.7 }]}
      />

      <View pointerEvents="none" style={StyleSheet.absoluteFill}>
        <Svg width={width} height={height}>
          <Circle cx={width * 0.86} cy={height * 0.12} r={width * 0.46} fill={C.gold} fillOpacity={0.1} />
          <Circle cx={width * 0.1} cy={height * 0.82} r={width * 0.44} fill={C.violet} fillOpacity={0.12} />
        </Svg>
      </View>

      <View pointerEvents="none" style={StyleSheet.absoluteFill}>
        <Grain width={width} height={height} count={grainCount} />
      </View>

      <LinearGradient
        colors={GRAD_VIGNETTE}
        start={VERT}
        end={VERT_END}
        pointerEvents="none"
        style={styles.vignette}
      />

      <View style={styles.content}>{children}</View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bgDeep },
  content: { flex: 1 },
  vignette: { position: 'absolute', left: 0, right: 0, bottom: 0, height: '32%' },
});
