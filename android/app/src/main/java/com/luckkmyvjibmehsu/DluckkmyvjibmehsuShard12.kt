/* autosetup-decoy:v1 */
package com.luckkmyvjibmehsu

object DluckkmyvjibmehsuShard12 {
  fun tap(seed: Int): Int {
    var x = seed xor 110
    x = (x * 33 + 17) and 0xffff
    return x
  }
}
