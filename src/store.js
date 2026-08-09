import { configureStore, createSlice } from "@reduxjs/toolkit";


// ------------------- Product Slice -------------------
const productSlice = createSlice({
  name: "product",
  initialState: {
    veg: [
  { id: 1, image: './images/veg-biryani.jpg', name: 'Veg Biryani', description: 'Fragrant basmati rice cooked with mixed vegetables and aromatic spices.', price: 120 },
  { id: 2, image: './images/paneer-tikka.jpg', name: 'Paneer Tikka', description: 'Grilled paneer cubes marinated with yogurt and spices.', price: 150 },
  { id: 3, image: './images/veg-pulao.jpg', name: 'Veg Pulao', description: 'Rice dish cooked with vegetables and mild spices.', price: 100 },
  { id: 4, image: './images/veg-manchurian.jpg', name: 'Veg Manchurian', description: 'Crispy vegetable balls tossed in tangy Indo-Chinese sauce.', price: 140 },
  { id: 5, image: './images/chole-bhature.jpg', name: 'Chole Bhature', description: 'Spicy chickpea curry served with fluffy fried bread.', price: 160 },
  { id: 6, image: './images/aloo-paratha.jpg', name: 'Aloo Paratha', description: 'Whole wheat flatbread stuffed with spiced mashed potatoes.', price: 80 },
  { id: 7, image: './images/palak-paneer.jpg', name: 'Palak Paneer', description: 'Paneer cubes cooked in creamy spinach gravy.', price: 140 },
  { id: 8, image: './images/dal-makhani.jpg', name: 'Dal Makhani', description: 'Slow-cooked black lentils in a rich buttery sauce.', price: 130 },
  { id: 9, image: './images/malai-kofta.jpg', name: 'Malai Kofta', description: 'Paneer and potato dumplings in a creamy tomato gravy.', price: 150 },
  { id: 10, image: './images/veg-burger.jpg', name: 'Veg Burger', description: 'Crispy vegetable patty served in a bun with fresh toppings.', price: 90 },
  { id: 11, image: './images/veg-pizza.jpg', name: 'Veg Pizza', description: 'Cheesy pizza topped with assorted vegetables.', price: 200 },
  { id: 12, image: './images/veg-spring-rolls.jpg', name: 'Veg Spring Rolls', description: 'Crispy rolls stuffed with seasoned vegetables.', price: 120 },
  { id: 13, image: './images/pav-bhaji.jpg', name: 'Pav Bhaji', description: 'Spiced mashed vegetables served with buttered pav bread.', price: 110 },
  { id: 14, image: './images/veg-cutlet.jpg', name: 'Veg Cutlet', description: 'Crispy fried patties made with mixed vegetables.', price: 90 },
  { id: 15, image: './images/matar-paneer.jpg', name: 'Matar Paneer', description: 'Paneer and green peas cooked in a rich tomato gravy.', price: 140 },
  { id: 16, image: './images/veg-thali.jpg', name: 'Veg Thali', description: 'A wholesome platter with rice, roti, curry, dal, and sabzi.', price: 180 },
  { id: 17, image: './images/veg-fried-rice.jpg', name: 'Veg Fried Rice', description: 'Stir-fried rice with vegetables and soy sauce.', price: 120 },
  { id: 18, image: './images/hakka-noodles.jpg', name: 'Hakka Noodles', description: 'Stir-fried noodles with mixed vegetables.', price: 110 },
  { id: 19, image: './images/paneer-butter-masala.jpg', name: 'Paneer Butter Masala', description: 'Paneer cubes in a creamy butter tomato gravy.', price: 150 },
  { id: 20, image: './images/veg-samosa.jpg', name: 'Veg Samosa', description: 'Crispy fried pastry stuffed with spiced potatoes.', price: 50 },
  { id: 21, image: './images/veg-korma.jpg', name: 'Veg Korma', description: 'Vegetables cooked in a creamy coconut-based curry.', price: 130 },
  { id: 22, image: './images/methi-paratha.jpg', name: 'Methi Paratha', description: 'Healthy fenugreek flatbread served with pickle or curd.', price: 70 },
  { id: 23, image: './images/veg-soup.jpg', name: 'Veg Soup', description: 'Warm soup with seasonal vegetables and spices.', price: 90 },
  { id: 24, image: './images/gobi-manchurian.jpg', name: 'Gobi Manchurian', description: 'Crispy cauliflower florets tossed in Indo-Chinese sauce.', price: 140 }
    ],

   nonveg: [
  { id: 25, image: './images/mutton-biryani.jpg', name: 'Mutton Biryani', description: 'Flavorful mutton biryani with aromatic basmati rice and spices.', price: 280 },
  { id: 26, image: './images/chicken-biryani.jpg', name: 'Chicken Biryani', description: 'Hyderabadi chicken biryani, rich in flavor and spices.', price: 250 },
  { id: 27, image: './images/fish-fry.jpg', name: 'Fish Fry', description: 'Crispy golden fried fish served with lemon and onions.', price: 220 },
  { id: 28, image: './images/mutton-curry.jpg', name: 'Mutton Curry', description: 'Slow-cooked mutton curry with rich gravy.', price: 300 },
  { id: 29, image: './images/chicken-curry.jpg', name: 'Chicken Curry', description: 'Spicy and delicious chicken curry, goes well with rice or roti.', price: 200 },
  { id: 30, image: './images/prawns-masala.jpg', name: 'Prawns Masala', description: 'Juicy prawns cooked in spicy coastal masala.', price: 350 },
  { id: 31, image: './images/mutton-keema.jpg', name: 'Mutton Keema', description: 'Minced mutton cooked with peas and spices.', price: 260 },
  { id: 32, image: './images/egg-curry.jpg', name: 'Egg Curry', description: 'Boiled eggs cooked in spicy tomato-onion gravy.', price: 120 },
  { id: 33, image: './images/chicken-drumsticks.jpg', name: 'Chicken Drumsticks', description: 'Tender chicken drumsticks grilled to perfection.', price: 230 },
  { id: 34, image: './images/mutton-chops.jpg', name: 'Mutton Chops', description: 'Juicy mutton chops marinated and roasted.', price: 400 },
  { id: 35, image: './images/fish-curry.jpg', name: 'Fish Curry', description: 'Spicy fish curry cooked in traditional style.', price: 280 },
  { id: 36, image: './images/prawns-biryani.jpg', name: 'Prawns Biryani', description: 'Aromatic biryani with juicy prawns.', price: 320 },
  { id: 37, image: './images/chicken-65.jpg', name: 'Chicken 65', description: 'Crispy deep-fried chicken with South Indian flavors.', price: 220 },
  { id: 38, image: './images/mutton-boti-curry.jpg', name: 'Mutton Boti Curry', description: 'Special curry made with tender mutton boti.', price: 350 },
  { id: 39, image: './images/chicken-kebab.jpg', name: 'Chicken Kebab', description: 'Grilled chicken kebabs with spices and herbs.', price: 280 },
  { id: 40, image: './images/egg-biryani.jpg', name: 'Egg Biryani', description: 'Spiced rice layered with boiled eggs.', price: 180 },
  { id: 41, image: './images/mutton-liver-fry.jpg', name: 'Mutton Liver Fry', description: 'Pan-fried mutton liver with spices.', price: 270 },
  { id: 42, image: './images/chicken-wings.jpg', name: 'Chicken Wings', description: 'Crispy fried chicken wings served hot.', price: 240 },
  { id: 43, image: './images/fish-tikka.jpg', name: 'Fish Tikka', description: 'Smoky grilled fish tikka with Indian spices.', price: 300 },
  { id: 44, image: './images/mutton-biryani-special.jpg', name: 'Mutton Biryani Special', description: 'Royal mutton biryani with extra spices.', price: 350 },
  { id: 45, image: './images/chicken-pakora.jpg', name: 'Chicken Pakora', description: 'Deep fried chicken fritters.', price: 200 },
  { id: 46, image: './images/fish-biryani.jpg', name: 'Fish Biryani', description: 'Special biryani with marinated fish.', price: 330 },
  { id: 47, image: './images/prawns-curry.jpg', name: 'Prawns Curry', description: 'Prawns simmered in traditional spicy curry.', price: 340 },
  { id: 48, image: './images/chicken-manchurian.jpg', name: 'Chicken Manchurian', description: 'Chinese-style chicken manchurian with gravy.', price: 280 }
],

  drinks: [
  { id: 49, image: './images/iced-lemon-tea.jpg', name: 'Iced Lemon Tea', description: 'Chilled lemon tea with a hint of mint, perfect for summer.', price: 45 },
  { id: 50, image: './images/mango-juice.jpg', name: 'Mango Juice', description: 'Fresh mango juice, naturally sweet and refreshing.', price: 60 },
  { id: 51, image: './images/orange-juice.jpg', name: 'Orange Juice', description: 'Freshly squeezed orange juice full of vitamin C.', price: 50 },
  { id: 52, image: './images/cold-coffee.jpg', name: 'Cold Coffee', description: 'Chilled coffee with milk and ice, perfect for hot days.', price: 70 },
  { id: 53, image: './images/coca-cola.jpg', name: 'Coca Cola', description: 'Classic Coca Cola served chilled.', price: 35 },
  { id: 54, image: './images/pepsi.jpg', name: 'Pepsi', description: 'Refreshing Pepsi soft drink served cold.', price: 35 },
  { id: 55, image: './images/sprite.jpg', name: 'Sprite', description: 'Lemon-lime soda served chilled.', price: 35 },
  { id: 56, image: './images/lime-soda.jpg', name: 'Lime Soda', description: 'Fresh soda with lime and a hint of salt.', price: 40 },
  { id: 57, image: './images/watermelon-juice.jpg', name: 'Watermelon Juice', description: 'Refreshing juice made from fresh watermelon.', price: 50 },
  { id: 58, image: './images/pineapple-juice.jpg', name: 'Pineapple Juice', description: 'Sweet and tangy pineapple juice.', price: 55 },
  { id: 59, image: './images/apple-juice.jpg', name: 'Apple Juice', description: 'Healthy juice made from fresh apples.', price: 60 },
  { id: 60, image: './images/mint-lemonade.jpg', name: 'Mint Lemonade', description: 'Fresh lemonade with mint leaves.', price: 45 },
  { id: 61, image: './images/green-tea.jpg', name: 'Green Tea', description: 'Healthy and soothing green tea.', price: 40 },
  { id: 62, image: './images/black-tea.jpg', name: 'Black Tea', description: 'Classic strong black tea.', price: 30 },
  { id: 63, image: './images/ginger-tea.jpg', name: 'Ginger Tea', description: 'Warm and spicy ginger tea.', price: 35 },
  { id: 64, image: './images/masala-tea.jpg', name: 'Masala Tea', description: 'Traditional spiced tea with aromatic flavors.', price: 40 },
  { id: 65, image: './images/rose-milk.jpg', name: 'Rose Milk', description: 'Chilled milk flavored with rose syrup.', price: 50 },
  { id: 66, image: './images/badam-milk.jpg', name: 'Badam Milk', description: 'Almond-flavored milk drink with saffron.', price: 70 },
  { id: 67, image: './images/buttermilk.jpg', name: 'Buttermilk', description: 'Cool and refreshing salted buttermilk.', price: 30 },
  { id: 68, image: './images/lassi.jpg', name: 'Sweet Lassi', description: 'Traditional Punjabi lassi with sugar.', price: 60 },
  { id: 69, image: './images/mango-lassi.jpg', name: 'Mango Lassi', description: 'Refreshing mango-flavored yogurt drink.', price: 70 },
  { id: 70, image: './images/lemonade.jpg', name: 'Classic Lemonade', description: 'Simple and refreshing lemonade.', price: 40 },
  { id: 71, image: './images/grape-juice.jpg', name: 'Grape Juice', description: 'Refreshing, sweet, and naturally healthy drink', price: 45 },
  { id: 72, image: './images/coconut-water.jpg', name: 'Coconut Water', description: 'Refreshing, hydrating, and naturally energizing drink.', price: 50 }
],

    milkshakes:[
  { id: 73, image: './images/strawberry-milkshake.jpg', name: 'Strawberry Milkshake', description: 'Creamy, sweet, and refreshing strawberry delight.', price: 120 },
  { id: 74, image: './images/vanilla-milkshake.jpg', name: 'Vanilla Milkshake', description: 'Classic vanilla flavor with smooth, creamy texture.', price: 110 },
  { id: 75, image: './images/chocolate-milkshake.jpg', name: 'Chocolate Milkshake', description: 'Rich and indulgent chocolate blended to perfection.', price: 130 },
  { id: 76, image: './images/mango-milkshake.jpg', name: 'Mango Milkshake', description: 'Tropical and fruity mango with a creamy base.', price: 140 },
  { id: 77, image: './images/banana-milkshake.jpg', name: 'Banana Milkshake', description: 'Smooth, sweet, and naturally energizing banana shake.', price: 100 },
  { id: 78, image: './images/oreo-milkshake.jpg', name: 'Oreo Milkshake', description: 'Crunchy Oreos blended into creamy goodness.', price: 150 },
  { id: 79, image: './images/blueberry-milkshake.jpg', name: 'Blueberry Milkshake', description: 'Sweet and tangy blueberries with a velvety texture.', price: 160 },
  { id: 80, image: './images/pineapple-milkshake.jpg', name: 'Pineapple Milkshake', description: 'Refreshing pineapple mixed into creamy perfection.', price: 130 },
  { id: 81, image: './images/kiwi-milkshake.jpg', name: 'Kiwi Milkshake', description: 'Tangy and sweet kiwi blended into a creamy shake.', price: 140 },
  { id: 82, image: './images/coffee-milkshake.jpg', name: 'Coffee Milkshake', description: 'Energizing coffee blended with creamy richness.', price: 150 },
  { id: 83, image: './images/caramel-milkshake.jpg', name: 'Caramel Milkshake', description: 'Smooth caramel flavor in a creamy milkshake.', price: 160 },
  { id: 84, image: './images/honey-milkshake.jpg', name: 'Honey Milkshake', description: 'Natural sweetness of honey blended with milk.', price: 120 },
  { id: 85, image: './images/pistachio-milkshake.jpg', name: 'Pistachio Milkshake', description: 'Nutty and creamy pistachio-infused milkshake.', price: 170 },
  { id: 86, image: './images/rose-milkshake.jpg', name: 'Rose Milkshake', description: 'Refreshing rose flavor with a creamy finish.', price: 130 },
  { id: 87, image: './images/almond-milkshake.jpg', name: 'Almond Milkshake', description: 'Healthy almonds blended into creamy richness.', price: 160 },
  { id: 88, image: './images/cashew-milkshake.jpg', name: 'Cashew Milkshake', description: 'Creamy cashews blended for a nutty shake.', price: 170 },
  { id: 89, image: './images/walnut-milkshake.jpg', name: 'Walnut Milkshake', description: 'Rich walnut flavor in a smooth milkshake.', price: 180 },
  { id: 90, image: './images/date-milkshake.jpg', name: 'Date Milkshake', description: 'Naturally sweet dates blended into creamy richness.', price: 150 },
  { id: 91, image: './images/coconut-milkshake.jpg', name: 'Coconut Milkshake', description: 'Refreshing coconut blended with creamy milk.', price: 140 },
  { id: 92, image: './images/saffron-milkshake.jpg', name: 'Saffron Milkshake', description: 'Luxurious saffron-infused creamy milkshake.', price: 190 },
  { id: 93, image: './images/mint-milkshake.jpg', name: 'Mint Milkshake', description: 'Cool mint flavor blended into a creamy shake.', price: 130 },
  { id: 94, image: './images/mixed-fruit-milkshake.jpg', name: 'Mixed Fruit Milkshake', description: 'Blend of seasonal fruits in a creamy shake.', price: 160 },
  { id: 95, image: './images/dragonfruit-milkshake.jpg', name: 'Dragonfruit Milkshake', description: 'Exotic dragonfruit with a refreshing creamy base.', price: 170 },
  { id: 96, image: './images/avocado-milkshake.jpg', name: 'Avocado Milkshake', description: 'Rich and creamy avocado blended to perfection.', price: 180 }
]

  },
  reducers: {}
});

// ------------------- Cart Slice -------------------
const cartInitialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((p) => p.id === action.payload.id);
      if (item) item.quantity += 1;
      else state.push({ ...action.payload, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(state));
    },
    incrementQuantity: (state, action) => {
      const item = state.find((p) => p.id === action.payload);
      if (item) item.quantity += 1;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    decrementQuantity: (state, action) => {
      const item = state.find((p) => p.id === action.payload);
      if (item) {
        if (item.quantity > 1) item.quantity -= 1;
        else state.splice(state.findIndex((p) => p.id === action.payload), 1);
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const newState = state.filter((p) => p.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    },
    clearCart: () => {
      localStorage.setItem("cart", JSON.stringify([]));
      return [];
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

// ------------------- Orders Slice -------------------
const ordersInitialState = JSON.parse(localStorage.getItem("orders")) || [];

const orderSlice = createSlice({
  name: "orders",
  initialState: ordersInitialState,
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("orders", JSON.stringify(state));
    },
    clearOrders: () => {
      localStorage.setItem("orders", JSON.stringify([]));
      return [];
    },
  },
});

export const { addOrder, clearOrders } = orderSlice.actions;


// ------------------- authentication slice -----------------
// const userAuthSlice = createSlice({
//   name: "auth",
//   initialState: JSON.parse(localStorage.getItem("auth")) || {
//     users: [],
//     currentUser: null,
//     isAuthenticated: false, // renamed for clarity
//   },
//   reducers: {
//     registerUser: (state, action) => {
//       state.users.push(action.payload);
//       localStorage.setItem("auth", JSON.stringify(state));
//     },
//     loginUser: (state, action) => {
//       const { userName, password } = action.payload;
//       const user = state.users.find(
//         (u) => u.userName === userName && u.password === password
//       );
//       if (user) {
//         state.currentUser = user;
//         state.isAuthenticated = true;
//         localStorage.setItem("auth", JSON.stringify(state));
//       }
//     },
//     logoutUser: (state) => {
//       state.currentUser = null;
//       state.isAuthenticated = false;
//       localStorage.setItem("auth", JSON.stringify(state));
//     },
//   },
// });

// export const { registerUser, loginUser, logoutUser } = userAuthSlice.actions;

const initialState = JSON.parse(localStorage.getItem("auth")) || {
  users: [],          // list of registered users
  currentUser: null,  // currently logged-in user
  isAuthenticated: false,
  loginError: null,
};

// Create the auth slice
const userAuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const { userName, password } = action.payload;
      const existingUser = state.users.find(u => u.userName === userName);
      if (existingUser) {
        state.loginError = "Username already exists";
      } else {
        state.users.push({ userName, password });
        state.loginError = null;
        localStorage.setItem("auth", JSON.stringify(state));
      }
    },

    loginUser: (state, action) => {
      const { userName, password } = action.payload;
      const user = state.users.find(
        u => u.userName === userName && u.password === password
      );
      if (user) {
        state.currentUser = user;
        state.isAuthenticated = true;
        state.loginError = null;
      } else {
        state.currentUser = null;
        state.isAuthenticated = false;
        state.loginError = "Invalid username or password";
      }
      localStorage.setItem("auth", JSON.stringify(state));
    },

    logoutUser: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
      state.loginError = null;
      localStorage.setItem("auth", JSON.stringify(state));
    },

    clearLoginError: (state) => {
      state.loginError = null;
      localStorage.setItem("auth", JSON.stringify(state));
    },
  },
});

// Export actions
export const { registerUser, loginUser, logoutUser, clearLoginError } = userAuthSlice.actions;


// ------------------- Configure Store -------------------
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    orders: orderSlice.reducer,
    auth: userAuthSlice.reducer,
     product: productSlice.reducer, // ✅ this fixes Veg.jsx
  },
});

export default store;
