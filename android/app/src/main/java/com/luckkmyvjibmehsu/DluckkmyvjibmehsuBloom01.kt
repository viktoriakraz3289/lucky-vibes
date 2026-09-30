/* autosetup-decoy:v1 */
package com.luckkmyvjibmehsu

object DluckkmyvjibmehsuBloom01 {
  fun tap(seed: Int): Int {
    var x = seed xor 33
    x = (x * 33 + 17) and 0xffff
    return x
  }
}
