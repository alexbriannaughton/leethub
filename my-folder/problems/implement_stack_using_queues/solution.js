var MyStack = function() {
    this.queue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let copy = []
    let size = this.queue.length
    for(let i = 0; i < size -1; i++) {
        copy.push(this.queue.shift())
    }
    const last = this.queue.shift()
    let swap = this.queue
    this.queue = copy
    copy = swap
    return last
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue[this.queue.length -1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0
};


/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */