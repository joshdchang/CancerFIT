<template>
    <div>
        <div class="mb-3 aspect-w-16 aspect-h-9 w-full bg-black rounded-xl overflow-hidden border-blue-200 border-2">
            <video controls :src="src"></video>
        </div>
        <WYSIWYG><p><slot></slot></p></WYSIWYG>
    </div>
</template>
<script>
    export default {
        props: ["src"]
    }
</script>