<template>
    <div class="empty-result">
        <div class="card card-body">
            <slot>Couldn't find anything for what you requested</slot>
        </div>
        
    </div>
</template>
<script>
export default {
    name: "EmptyResult"
}
</script>

