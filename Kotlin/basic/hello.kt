fun main(args: Array<String>){
    print("Hello world : ")
    println(Sum(1, 2))
    println(Sum1(10, 12));
    println(Sum2(2, 3));
    println(Sum3(20, 30));
}

fun Sum(a: Int, b: Int): Int{
    return a + b;
}

fun Sum1(a: Int, b: Int) = a + b;

fun Sum2(a: Int, b: Int): Unit {
    println("Sum of $a and $b is ${a + b}")
}

fun Sum3(a: Int, b: Int){
    println("Sum of $a and $b is ${a + b}");
}