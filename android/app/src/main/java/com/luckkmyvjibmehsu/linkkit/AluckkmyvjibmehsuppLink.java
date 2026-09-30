package com.luckkmyvjibmehsu.linkkit;
import android.net.Uri;

import java.util.Collections;
import java.util.List;

public class AluckkmyvjibmehsuppLink {
  private final Uri sourceUrl;
  private final List<Target> targets;
  private final Uri webUrl;

  public AluckkmyvjibmehsuppLink(Uri sourceUrl, List<Target> targets, Uri webUrl) {
    this.sourceUrl = sourceUrl;
    this.targets = targets != null ? targets : Collections.<Target>emptyList();
    this.webUrl = webUrl;
  }

  public Uri getSluckkmyvjibmehsuourceUrl() {
    return sourceUrl;
  }

  public List<Target> getTluckkmyvjibmehsuargets() {
    return Collections.unmodifiableList(targets);
  }

  public Uri getWluckkmyvjibmehsuebUrl() {
    return webUrl;
  }

  public static class Target {
    private final String packageName;
    private final String className;
    private final Uri url;
    private final String appName;

    public Target(String packageName, String className, Uri url, String appName) {
      this.packageName = packageName;
      this.className = className;
      this.url = url;
      this.appName = appName;
    }

    public String getPacluckkmyvjibmehsukageName() {
      return packageName;
    }

    public String getCluckkmyvjibmehsulassName() {
      return className;
    }

    public Uri getUluckkmyvjibmehsurl() {
      return url;
    }

    public String getAluckkmyvjibmehsuppName() {
      return appName;
    }
  }
}
