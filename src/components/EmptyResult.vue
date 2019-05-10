<template>
    <div class="empty-result">
        <div class="">
            <img src="/images/no-result.png" alt="No result found">
            <br><br>
            <span class="error-header">
                <slot name="error-header">Errm</slot>
            </span>
            <br>
            <slot>Couldn't find anything for what you requested</slot>
        </div>
        
    </div>
</template>
<script>
export default {
    name: "EmptyResult"
}
</script>
<style scoped>
    .empty-result{
        --pink-text-color: #D3187F;
        text-align:center;
    }
    .empty-result img{
        width: 50%;
        display:inline-block;
    }
    .error-header{
        background: var(--pink-text-color);
        color:white;
        padding: 5px 15px;
        border-radius: 10px;
    }
</style>


