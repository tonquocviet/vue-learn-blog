<template>
  <v-layout>
    <v-flex>
      <v-card v-for="(list, index) in listBlogs" :key="index" class="mx-auto" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">ID {{list.id}}</div>
            <v-list-item-title class="headline mb-1">{{list.title}}</v-list-item-title>
            <v-list-item-subtitle>{{list.description}}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey">
            <v-img :src="list.image">
            </v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn text @click="Read(list)">Read</v-btn>
          <v-btn text>Share</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex>
    </v-flex>
  </v-layout>
</template>
<script>
import BlogDetail from './BlogDetail'
export default {
  name: 'Blogs',
  components: {
    BlogDetail
  },
  data(){
    return{
      toggleDetail: false,
      listBlogs: [
      {
        id: 2345,
        title: 'React Js',
        image: 'https://s3-ap-southeast-1.amazonaws.com/maxmarket/myad/img/img_122a6480-aeac-4940-8b0c-8bb758ea4c18.png',
        description: 'Được dịch từ tiếng Anh-React là một thư viện JavaScript để xây dựng giao diện người dùng. Nó được duy trì bởi Facebook và một cộng đồng gồm các nhà phát triển và công ty cá nhân.'
      },
      {
        id: 2145,
        title: 'Node Js',
        image: 'https://s3-ap-southeast-1.amazonaws.com/maxmarket/myad/img/img_7bb99a7f-18de-42b5-b7a4-fc26baec111e.png',
        description: 'Được dịch từ tiếng Anh-React là một thư viện JavaScript để xây dựng giao diện người dùng. Nó được duy trì bởi Facebook và một cộng đồng gồm các nhà phát triển và công ty cá nhân.'
      },
      {
        id: 2365,
        title: 'Angular Js',
        image: 'https://s3-ap-southeast-1.amazonaws.com/maxmarket/myad/img/img_fbe21243-cc7d-4a33-bdd1-f8611a7f84b9.png',
        description: 'Được dịch từ tiếng Anh-React là một thư viện JavaScript để xây dựng giao diện người dùng. Nó được duy trì bởi Facebook và một cộng đồng gồm các nhà phát triển và công ty cá nhân.'
      },
      {
        id: 2845,
        title: 'Vue Js',
        image: 'https://s3-ap-southeast-1.amazonaws.com/maxmarket/myad/img/img_a3ac1ce2-df8f-42aa-ba5f-a9f93a2d3060.png',
        description: 'Được dịch từ tiếng Anh-React là một thư viện JavaScript để xây dựng giao diện người dùng. Nó được duy trì bởi Facebook và một cộng đồng gồm các nhà phát triển và công ty cá nhân.'
      },
    ]
    }
  },
  methods: {
    Read(value){
      // this.toggleDetail = !this.toggleDetail
      // console.log(value);
      this.$router.push({name: 'blogdetail', params: {id: value.id}})
    }
  },
  watch: {
    $route(value){
      console.log(value, 'route change');
    }
  }
};
</script>