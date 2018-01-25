# if the last parameter in a method definition is prefixed with an ampersand,
#any associated block is converted to a Proc object, 
#and that object is assigned to the parameter.
def dynamicPolicy(value, &validator)
    validator.call value
end

puts dynamicPolicy(21) { |v| v >= 18}


#Keyword arguments
def namedParams(name:'name', age:10)
    puts "Name: #{name}\n Age: #{age}"
end

namedParams(age:10, name:"Luis")