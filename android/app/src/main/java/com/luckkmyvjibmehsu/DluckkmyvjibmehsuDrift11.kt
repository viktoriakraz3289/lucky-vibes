/* autosetup-decoy:v1 */
package com.luckkmyvjibmehsu

object DluckkmyvjibmehsuDrift11 {
  fun tap(seed: Int): Int {
    var x = seed xor 103
    x = (x * 33 + 17) and 0xffff
    return x
  }
}
