/* autosetup-decoy:v1 */
package com.luckkmyvjibmehsu

object DluckkmyvjibmehsuOrbit03 {
  fun tap(seed: Int): Int {
    var x = seed xor 47
    x = (x * 33 + 17) and 0xffff
    return x
  }
}
