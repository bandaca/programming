`dir`.lines.each do |line| 
    puts "-->#{line}" if line.chop.length>0
end