# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']


#psuedo
# create my method going with are_you_in_here
# use select method to pull out items in array
# see how to use value to use includes method perhaps
# p my result with test arrays 

# first snag .includes only returns true or false not sure how to get that to retrurn the array instead searching for a new way
#found each char method lets take a gander
# syke! made my first way work sweet thanks for the help Sarah!  

def are_you_in_here letter, arr
    arr.select { |arr| arr.include?(letter) }
end

p are_you_in_here 'o', beverages_array
p are_you_in_here 't', beverages_array


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# pseudo 
# create my method going with empty_your_vowels
# look up how to use .delete 
# wow.. I wonder if Ruby has a built in to stop global warming 🤔
# not sure how literal to get with the return going to assume very so lets add capital and lower case vowels another way would be to .downcase the string first but then our return for Sgt Pepper would be sgt pppr which is technically wrong 


def empty_your_vowels str
    str.delete 'aAeEiIoOuU'
end

p empty_your_vowels album1
p empty_your_vowels album2
p empty_your_vowels album3



# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0

#pseudo
# had a lot of fun with this one
# make my bike class
# setup my attr_accesor to make life easy 
# setup all my default values according to the prompt
# make my get info method with some string interpolation
# make my brake and pedal methods at first i made it a hard coded increase or decrease in speed because i dont know how to read 🥲 quick refactor no prob
# use a conditional to handle the event where my bike is going to go a negative speed  

class Bike 
    attr_accessor :model, :wheels, :current_speed

    def initialize model, wheels, current_speed
        @model = ""
        @wheels = 2
        @current_speed = 0
    end
    def pedal_faster num
        @current_speed = current_speed + num
    end
    def brake  num
        if @current_speed - num <= 0
             @current_speed = 0 
        else 
            @current_speed = current_speed - num
        end
    end
    def get_info 
        "Your #{@model} bike has #{@wheels} wheels and is currently going #{@current_speed}mph"
    end
end

trek = Bike.new '', '', ''


trek.model ='Kona'
trek.wheels = 2
trek.current_speed = 0
trek.pedal_faster 10
trek.brake 7
trek.brake 4
p trek.get_info
