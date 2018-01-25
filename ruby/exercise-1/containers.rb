class Item
    attr :idi
    attr :value

    def initialize(id, value)
        @idi = idi
        @value = value
    end
end

item1 = Item.new(1, "First") 
item2 = Item.new(2, "Second")

items = {item1 => "First Item", item2 => "Second Item"}

puts items[item2]