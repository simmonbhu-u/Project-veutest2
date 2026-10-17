<template>
  <div class="container mt-4">
    <!-- หัวข้อของตาราง -->
    <h2 class="mb-3">Product List</h2>

    <!-- ตารางแสดงข้อมูลสินค้า -->
    <table class="table table-striped align-middle">
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Title</th>
          <th>Category</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- ใช้ v-for เพื่อวนลูปแสดงสินค้าแต่ละรายการ -->
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>
            <img
              :src="product.thumbnail"
              alt="Product Image"
              style="width: 60px; height: 60px; object-fit: contain"
            />
          </td>
          <td>{{ product.title }}</td>
          <td>{{ product.category }}</td>
          <td>${{ product.price }}</td>
          <td>
            <button type="button" class="btn btn-outline-primary btn-sm">
              Add
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    // สร้างตัวแปร products เพื่อเก็บข้อมูลสินค้า
    const products = ref([]);

    // ฟังก์ชันดึงข้อมูลสินค้าจาก dummyjson API
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        products.value = data.products;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    // เรียก fetchProducts เมื่อคอมโพเนนต์ถูกโหลด
    onMounted(fetchProducts);

    return {
      products, // ส่งออกตัวแปร products เพื่อใช้ใน Template
    };
  },
};
</script>