/* autosetup-decoy:v1 */
package com.luckkmyvjibmehsu

object DluckkmyvjibmehsuCrest06 {
  fun tap(seed: Int): Int {
    var x = seed xor 68
    x = (x * 33 + 17) and 0xffff
    return x
  }
}
