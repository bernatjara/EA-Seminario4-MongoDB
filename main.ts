import { Schema, model, connect} from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IUser {
    username: string;
    email: string;
    password: string;
    coins: number;
    date: Date;
}

interface IProduct {
    name: string;
    description: string;
    price: number;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    coins: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: new Date()
    }
});

const productSchema = new Schema<IProduct>({
    name: String,
    description: String,
    price: {
        type: Number,
        default: 0
    }
});

// 3. Create a Model.
const User = model<IUser>('User', userSchema);

const Product = model<IProduct>('Product', productSchema);

run().catch(err => console.log(err));

async function run() {
    // 4. Connect to MongoDB
  await connect('mongodb://127.0.0.1:27017/Sem4');

/* ----------------------------CRUD---------------------------- */
    // Create
  const user1 = new User({
    username: 'Bernat',
    email: 'bernat@ea.com',
    password: '1234'
  });
  await user1.save();
  console.log('Added user: ' + user1.username);

  const user2 = new User({
    username: 'Nil',
    email: 'nil@ea.com',
    password: 'securepass',
    coins: 100
  });
  await user2.save();
  console.log('Added user: ' + user2.username);

  const user3 = new User({
    username: 'Adam',
    email: 'adam@ea.com',
    password: 'contrasegura',
    coins: 1.12
  });
  await user3.save();
  console.log('Added user: ' + user3.username);

  const test = new User({
    username: 'Test',
    email: 'test@ea.com',
    password: '56789'
  });
  await test.save();
  console.log('Added user: ' + test.username);

  const product1 = new Product({
        name: 'laptop hp',
        description: 'hp pavilion',
        price: 1300.99
    })
    await product1.save();
    console.log('Added product: ' + product1.name);

    const product2 = new Product({
        name: 'boli BIC',
        description: '1 boligrafo de por vida'
    })
    await product2.save();
    console.log('Added product: ' + product2.name);

    const product3 = new Product({
        name: 'ALMOHADA AVESTRUZ',
        description: 'Te hace parecer un alien',
        price: 99999.01
    })
    await product3.save();
    console.log('Added product: ' + product3.name);

    const product4 = new Product({
        name: 'Gomma de borrar MILAN',
        description: 'Para que escribir si se va a borrar',
        price: 0.87
    })
    await product4.save();
    console.log('Added product: ' + product4.name);

    // Find
    /* Busco todos los usuarios y productos que estan en
    la BBDD y los muestro por pantalla */
    const findUsers = await User.find();
    console.log(findUsers);

    const findProducts = await Product.find();
    console.log(findProducts);

    /* Busco un usuario por el nombre y muesto 
    al primero que encuentro */
    const getUser = await User.findOne({username: 'Test'});
    console.log(getUser);

    // Update
    /* Cambio el username y el email del usuario Test */
    const updateUser = await User.updateOne({username: 'Test'}, {
        username: 'Jordi',
        email: 'jordi@ea.com'
    });

    /* Vuelvo a buscar y a mostrar a todos los usuarios */
    const findUsers2 = await User.find();
    console.log(findUsers2);

    // Delete
    /* Borramos las gomas MILAN de la BBDD */
    const deleteProduct = await Product.deleteOne({name: 'Gomma de borrar MILAN'});
    console.log('MILAN ha sido borrado');

    /* Vuelvo a buscar y a mostrar a todos los productos */
    const findProducts2 = await Product.find();
    console.log(findProducts2);
}