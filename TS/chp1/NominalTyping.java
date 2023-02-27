class MyClass{
    String name;
    int age;
}

class AnotherClass{
    String name;
    int age;
}

class NominalTyping{
    public static void main(String args[]){
        MyClass c = new MyClass();
        AnotherClass a = new AnotherClass();

        // Error Cause of nominal typing
        // c = a;
    }
}