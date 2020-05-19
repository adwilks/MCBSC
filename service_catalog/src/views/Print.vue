<template>
    <h1 class="text-center display-2">Print View</h1>
</template>

<script>
export default {
    mounted() {
        // eslint-disable-next-line
        console.log("mounted Print View");
        window.print();
    }
};
</script>
