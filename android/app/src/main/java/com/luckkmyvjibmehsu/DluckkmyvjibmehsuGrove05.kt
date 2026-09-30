/* autosetup-decoy:v1 */
package com.luckkmyvjibmehsu

object DluckkmyvjibmehsuGrove05 {
  fun tap(seed: Int): Int {
    var x = seed xor 61
    x = (x * 33 + 17) and 0xffff
    return x
  }
}
