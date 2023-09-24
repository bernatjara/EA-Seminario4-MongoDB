"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
var userSchema = new mongoose_1.Schema({
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
var productSchema = new mongoose_1.Schema({
    name: String,
    description: String,
    price: {
        type: Number,
        default: 0
    }
});
// 3. Create a Model.
var User = (0, mongoose_1.model)('User', userSchema);
var Product = (0, mongoose_1.model)('Product', productSchema);
run().catch(function (err) { return console.log(err); });
function run() {
    return __awaiter(this, void 0, void 0, function () {
        var user1, user2, user3, test, product1, product2, product3, product4, findUsers, findProducts, getUser, updateUser, findUsers2, deleteProduct, findProducts2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // 4. Connect to MongoDB
                return [4 /*yield*/, (0, mongoose_1.connect)('mongodb://127.0.0.1:27017/Sem4')];
                case 1:
                    // 4. Connect to MongoDB
                    _a.sent();
                    user1 = new User({
                        username: 'Bernat',
                        email: 'bernat@ea.com',
                        password: '1234'
                    });
                    return [4 /*yield*/, user1.save()];
                case 2:
                    _a.sent();
                    console.log('Added user: ' + user1.username);
                    user2 = new User({
                        username: 'Nil',
                        email: 'nil@ea.com',
                        password: 'securepass',
                        coins: 100
                    });
                    return [4 /*yield*/, user2.save()];
                case 3:
                    _a.sent();
                    console.log('Added user: ' + user2.username);
                    user3 = new User({
                        username: 'Adam',
                        email: 'adam@ea.com',
                        password: 'contrasegura',
                        coins: 1.12
                    });
                    return [4 /*yield*/, user3.save()];
                case 4:
                    _a.sent();
                    console.log('Added user: ' + user3.username);
                    test = new User({
                        username: 'Test',
                        email: 'test@ea.com',
                        password: '56789'
                    });
                    return [4 /*yield*/, test.save()];
                case 5:
                    _a.sent();
                    console.log('Added user: ' + test.username);
                    product1 = new Product({
                        name: 'laptop hp',
                        description: 'hp pavilion',
                        price: 1300.99
                    });
                    return [4 /*yield*/, product1.save()];
                case 6:
                    _a.sent();
                    console.log('Added product: ' + product1.name);
                    product2 = new Product({
                        name: 'boli BIC',
                        description: '1 boligrafo de por vida'
                    });
                    return [4 /*yield*/, product2.save()];
                case 7:
                    _a.sent();
                    console.log('Added product: ' + product2.name);
                    product3 = new Product({
                        name: 'ALMOHADA AVESTRUZ',
                        description: 'Te hace parecer un alien',
                        price: 99999.01
                    });
                    return [4 /*yield*/, product3.save()];
                case 8:
                    _a.sent();
                    console.log('Added product: ' + product3.name);
                    product4 = new Product({
                        name: 'Gomma de borrar MILAN',
                        description: 'Para que escribir si se va a borrar',
                        price: 0.87
                    });
                    return [4 /*yield*/, product4.save()];
                case 9:
                    _a.sent();
                    console.log('Added product: ' + product4.name);
                    return [4 /*yield*/, User.find()];
                case 10:
                    findUsers = _a.sent();
                    console.log(findUsers);
                    return [4 /*yield*/, Product.find()];
                case 11:
                    findProducts = _a.sent();
                    console.log(findProducts);
                    return [4 /*yield*/, User.findOne({ username: 'Test' })];
                case 12:
                    getUser = _a.sent();
                    console.log(getUser);
                    return [4 /*yield*/, User.updateOne({ username: 'Test' }, {
                            username: 'Jordi',
                            email: 'jordi@ea.com'
                        })];
                case 13:
                    updateUser = _a.sent();
                    return [4 /*yield*/, User.find()];
                case 14:
                    findUsers2 = _a.sent();
                    console.log(findUsers2);
                    return [4 /*yield*/, Product.deleteOne({ name: 'Gomma de borrar MILAN' })];
                case 15:
                    deleteProduct = _a.sent();
                    console.log('MILAN ha sido borrado');
                    return [4 /*yield*/, Product.find()];
                case 16:
                    findProducts2 = _a.sent();
                    console.log(findProducts2);
                    return [2 /*return*/];
            }
        });
    });
}
