class Person
    attr :name
    attr :lastName

    def initialize name, lastName
        @name = name
        @lastName = lastName
    end

    def fullName
        "#{@name} #{lastName}"
    end

    #Class Method(Static Method)
    def Person.newName
        "Another name"
    end
end


def myblock
    puts "Start Processing..."
    sleep 5
    puts "End processing. Displaying greetings..."
    yield "Carlos","Banda"
end

myblock do |name,lastName|
    puts "Hello #{name} #{lastName}"
end

me = Person.new "Carlos", "Banda"
puts "Person's Name: #{me.fullName}"

puts Person.newName

s = "This is a sample text"

s.scan /\w[-\w']+/ do |w| 
    puts w
end


('A'..'C').each do |n| 
    puts n
end
