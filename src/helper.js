import Vue from 'vue'

const Helper = {
    getWindowHeight() {
        return document.documentElement.clientHeight
    },
    getWindowWidth() {
        return document.documentElement.clientWidth
    },
    getElementHeight(el) {
        return el.clientHeight;
    },
    getElementWidth(el) {
        return el.clientWidth;
    },
    getScrollOffsetHeight() {
        return window.pageYOffset || document.documentElement.scrollTop
    },
    getScrollOffsetWidth() {
        return window.pageXOffset || document.documentElement.scrollLeft
    },
    formatDate(val) {
        return Vue.moment(val).format("DD.MM.YYYY hh:mm:ss")
    },
    mergeArrays(arr1, arr2) {
        if (Array.isArray(arr1) && Array.isArray(arr2)) {
            arr2.forEach(val => {
                if (arr1.indexOf(val) === -1) {
                    arr1.push(val)
                }
            })
        } else {
            console.error("Not an array passed");
        }
        return arr1;
    },
    diffArrays(arr1, arr2) {
        if (Array.isArray(arr1) && Array.isArray(arr2)) {
            arr2.forEach(val => {
                let index = arr1.indexOf(val);
                if (index !== -1) {
                    arr1.splice(index, 1)
                }
            })
        } else {
            console.error("Not an array passed");
        }
        return arr1;
    },
    isElementBottomVisible(el) {
        let clientWindowHeight = this.getWindowHeight();
        let scrollOffset = this.getScrollOffsetHeight();
        if (clientWindowHeight + scrollOffset >= el.offsetTop + el.offsetHeight) {
            return true;
        }
    },
    isElementTopVisible(el) {
        let clientWindowHeight = this.getWindowHeight();
        let scrollOffset = this.getScrollOffsetHeight();
        if (clientWindowHeight + scrollOffset >= el.offsetTop) {
            return true;
        }
    },
    isElementRightVisible(el) {
        let clientWindowWidth = this.getWindowWidth();
        let scrollOffset = this.getScrollOffsetWidth();
        console.log(el.offsetLeft, el.offsetWidth);
        if (clientWindowWidth + scrollOffset >= el.offsetLeft + el.offsetWidth) {
            return true;
        }
    },
}

export default Helper;
