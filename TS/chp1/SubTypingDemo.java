class Human{
    void work(){
        System.out.print("Human work");
    }
}

class Doctor extends Human{
    void work(){
        System.out.println("Doctor works");
    }
}

class Teacher extends Human{
    void work(){
        System.out.println("Teacher works");
    }
}

class Robot{
    void work(){
        System.out.println("Robot works");
    }
}

class SubTypingDemon{
    public static void main(String args[]){
        Human human = new Doctor();
        human.work();
        human = new Teacher();
        human.work();

        // Error for subtyping
        // human = new Robot();
    }
}