/* autosetup-decoy:v1 */
package com.luckkmyvjibmehsu

object DluckkmyvjibmehsuNexus10 {
  fun tap(seed: Int): Int {
    var x = seed xor 96
    x = (x * 33 + 17) and 0xffff
    return x
  }
}
