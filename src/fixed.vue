<template>
    <div :style="style" ref="fixed" >
        <slot v-if="show"></slot>
    </div>
</template>