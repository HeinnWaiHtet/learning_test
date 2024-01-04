// readonly variable use val and can assign once

val a: Int = 10;
val b = 20;

fun main(){
    println("a = $a, b = $b, c = ");
    fun printDouble(d: Double){ print(d) }

    val i = 1
    val d = 1.0
    val f = 1.0f

    printDouble(d)
    // printDouble(i) Error : Typemismatch
    // printDouble(f) Error : Typemismatch

    val aa: Int = 100
    val boxedA: Int? = aa
    val anotherBoxedA: Int? = a

    val b: Int = 10000
    val boxedB: Int? = b
    val anotherBoxedB: Int? = b

    println(boxedA === anotherBoxedA) // true
    println(boxedB === anotherBoxedB) // false

    // Hypothetical code, does not actually compile:
    val a1: Int? = 1 // A boxed Int (java.lang.Integer)
    val b1: Long? = a1 // Implicit conversion yields a boxed Long (java.lang.Long)
    print(b1 == a1) // Surprise! This prints "false" as Long's equals() checks whether the other is Long as well
}

val one = 1 // Int
val threeBillion = 3000000000 // Long
val oneLong = 1L // Long
val oneByte : Byte = 1

val pi = 3.14 // Double
// val one : Double = 1 // Error: type mismatch
val oneDouble = 1.0 // Double

val e = 2.7182818284 // Double
val eFloat = 2.7182818284f // Float, actual value is 2.7182817

val oneMillion = 1_000_000
val creditCardNumber = 1234_5678_9012_3456L
val socialSecurityNumber = 999_99_9999L
val hexBytes = 0xFF_EC_DE_5E
val bytes = 0b11010010_01101001_10010100_10010010
val l = 1L + 3 // Long + Int => Long
val x = 5L / 2
println(x == 2L) // true

val x = 5 / 2.toDouble()
fun average(arr: Array<out Number>): Double {
  var sum = 0.0
  for (num in arr) {
    sum += num.toDouble()
  }
  return sum / arr.size
}

val intArray = arrayOf(1, 2, 3)
val floatArray = arrayOf(1.0f, 2.0f, 3.0f)  
val doubleArray = arrayOf(1.0, 2.0, 3.0)
val longArray = arrayOf(1L, 2L, 3L)

println(average(intArray)) 
println(average(floatArray))
println(average(doubleArray))  
println(average(longArray))

println(x == 2.5// true)