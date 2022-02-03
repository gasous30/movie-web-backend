# API for Project movie-web-react-tsx-2

## **Member**

#### Octavianus Bagaswara Adi - 182

## **Database**

#### Database dibuat dengan menggunakan MongoDB Atlas.

![Screenshot MongoDB](/images/mongodb.jpg)

#### Database terdiri dari 1 Collection dengan skema sebagai berikut:

##### - **name**, berfungsi untuk menyimpan nama dalam bentuk string.

##### - **email**, berfungsi untuk menyimpan email dalam bentuk string.

##### - **password**, berfungsi untuk menyimpan password yang sudah di **Hash** dalam bentuk string

##### - **books**, berfungsi untuk menyimpan ID Movie yang masuk dalam Wishlist dalam bentuk array of string.

## **Backend**

### API di deploy dengan menggunakan Heroku (https://movie-web-api-182.herokuapp.com/api)

### **Endpoint**

#### 1. https://movie-web-api-182.herokuapp.com/api/user/register untuk mendaftarkan pengguna baru kedalam database.

![Screenshot Register](/images/register.jpg)

#### 2. https://movie-web-api-182.herokuapp.com/api/user/login untuk memberikan token (menggunakan JWT) agar pengguna bisa mengakses database.

![Screenshot Login](/images/login.jpg)
![Screenshot Auth-Token](/images/authToken.jpg)

#### 3. https://movie-web-api-182.herokuapp.com/api/books/add untuk menambahkan Wishlist Movie ID Pengguna kedalam database.

![Screenshot Add Movie](/images/addWishlistTop.jpg)

![Screenshot Add Movie](/images/addWishlistSearch.jpg)

#### 4. https://movie-web-api-182.herokuapp.com/api/books/get untuk mendapatkan Wishlist Movie ID Pengguna

![Screenshot Get Movie](/images/showWishlist.jpg)

#### 5. https://movie-web-api-182.herokuapp.com/api/books/delete untuk menghapus Wishlist Movie ID Pengguna dari database.

![Screenshot Delete Movie](/images/deleteWishlist.jpg)

## **Notes**

### Halaman Wishlist tidak akan bisa dibuka apabila pengguna tidak memiliki token.

### Navbar Login akan berubah menjadi Logout ketika pengguna memiliki token.
