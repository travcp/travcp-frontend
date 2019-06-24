<template>
<div style="display:inline-block">
<ul class="pagination pagination-danger" v-if="pagination">
				
    <li class="page-item" :class="{active:pagination.prev_page_url != null, disabled: pagination.prev_page_url == null}">
        <a href="javascript:void(0);" class="page-link" @click="fetchPrevious"> prev</a>
    </li>
    
    <li class="page-item" :class="{active:pagination.next_page_url != null, disabled: pagination.next_page_url == null}">
        <a href="javascript:void(0);" class="page-link" @click="fetchNext">next </a>
    </li>
</ul>
</div>
</template>
<script>
	export default{
		name: "SimplePagination",
		data(){
			return {
				
			}
        },
        props: ['pagination', 'callback'],
		methods: {
			fetchNext(){
				if (this.pagination.next_page_url != null){
				
					let url = new URL(this.pagination.next_page_url);
					let params = new URLSearchParams(url.search)
                    
                    this.callback(params.get('page'));
				}
				
			},
			fetchPrevious(){
				if (this.pagination.prev_page_url != null){
				
					let url = new URL(this.pagination.prev_page_url);
                    let params = new URLSearchParams(url.search);
                    this.callback(params.get('page'));
				}
			}
		},
		created(){
			
		}
	}
</script>
<style scoped>
.page-item.active .page-link {
	z-index:0;
}
</style>
