# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Post.destroy_all
User.destroy_all
Flight.destroy_all




mona = User.create!(username: 'Momo3000', name: 'Mona Abdulrab', photo_url: 'https://scontent.fatl1-2.fna.fbcdn.net/v/t1.0-9/1016054_1924753474935_1525786522_n.jpg?_nc_cat=0&oh=0662920fd546d9332c3a72e6c90e470f&oe=5B75C8BE'  )
jared = User.create!(username: 'Jmoney', name: 'Jared Fox', photo_url: 'https://scontent.fatl1-2.fna.fbcdn.net/v/t31.0-8/19780637_1744744168874636_4893574145361868854_o.jpg?_nc_cat=0&oh=2e2164582a7f456368204ec6f81c749b&oe=5B6752DF'  )
james = User.create!(username: 'KingHamas', name: 'James Lawerence', photo_url: 'https://scontent.fatl1-2.fna.fbcdn.net/v/t31.0-8/25351962_10210211989111429_6230005887468586962_o.jpg?_nc_cat=0&oh=bbe9e98b794adac48aebe521762fdb26&oe=5B743C6F'  )
yongin = User.create!(username: 'YoungMoney', name: 'Youngin Cho', photo_url: 'https://scontent.fatl1-2.fna.fbcdn.net/v/t1.0-9/17155306_10155331234160934_599035289131857202_n.jpg?_nc_cat=0&oh=49683803956c8fd0c2e15080e65e91b1&oe=5B643247'  )


Bag.create!(name: 'Mona' , weight: 32,  fragile: 'true' user_id:  mona.id  )

Bag.create!(name: 'Jared' , weight: 19,  fragile: 'false' user_id:  jared.id  )

Bag.create!(name: 'James' , weight: 42,  fragile: 'true' user_id:  james.id  )

Bag.create!(name: 'Youngin' , weight: 44,  fragile: 'false' user_id:  youngin.id  )




Flight.create!(airline: 'Delta' , confirmation_id: 'W3XD$D3DAS' )
Flight.create!(airline: 'American Airl;ines' , confirmation_id: 'W45SCF494' )
Flight.create!(airline: 'Spirit' , confirmation_id: 'W3XD$D3DAS' )
Flight.create!(airline: 'Frontier' , confirmation_id: 'W3DVS2S3' )

