<template>
    <div class="bg-white">
      <div class="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2>My Wishlist</h2>
        <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <a href="#" v-for="product in products" :key="product.id" class="group">
            <div class="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
              <img :src="product.image" :alt="product.name"
                class="object-cover object-center w-full h-full group-hover:opacity-75" />
            </div>
            <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
          </a>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

const API = 'http://15.237.118.106:3000';

interface Product {
  id: number;
  name: string;
  image: string;
}

interface WishlistMap {
  id: number;
  userId: string;
  productId: string;
}

export default defineComponent({
  name: 'App',
  data() {
    return {
      products: [] as Product[],
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts(): Promise<void> {
      const customerId = 1;
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGVtbyIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJpZCI6MSwiaWF0IjoxNjgwMDcyMzAzfQ.3UhswCAmBPL23EX3kKZThdVIXlRjKvhMe0jUpr_opV8";
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      try {
        const response = await axios.get<WishlistMap[]>(`${API}/wishlist/${customerId}`, config);
        // TODO: Should be refactor and add the relations
        response.data.forEach(async (product) => {
          const response = await axios.get<Product>(`${API}/products/${product?.productId}`);
          this.products.push(response.data);
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>
