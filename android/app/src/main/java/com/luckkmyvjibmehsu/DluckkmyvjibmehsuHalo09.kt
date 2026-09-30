/* autosetup-decoy:v1 */
package com.luckkmyvjibmehsu

object DluckkmyvjibmehsuHalo09 {
  fun tap(seed: Int): Int {
    var x = seed xor 89
    x = (x * 33 + 17) and 0xffff
    return x
  }
}
