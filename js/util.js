// Classes
class LinkedList {
    constructor() {
        this.length = 0;
        this.head   = null;
    }
    
    add(data) {
        let node = {
            data,
            next: null
        };
        let current;
        
        if(this.head == null)
            this.head = node;
        else {
            current = this.head;
            
            while(current.next) 
                current = current.next;
            
            current.next = node;
        }
        this.length++;
    }
    
    remove(index) {
        if(index <= -1 || index >= this.length)
            return null;
            
        let current = this.head;
        let i       = 0;
        let previous;
        
        if(index == 0)
            this.head = current.next;
        else {
            while(i++ < index){
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.length--;
        return current.data;
    }
    
    item(index) {
        if(index <= -1 || index >= this.length)
            return null;
        
        let current = this.head;
        let i       = 0;
        
        while(i++ < index)
            current = current.next;
        
        return current.data;
    }
    
    toArray() {
        let result = [];
        let current = this.head;
        
        while(current) {
            result.push(current.data);
            current = current.next;
        }
        
        return result;
    }
    
    toString() {
        return this.toArray().toString();
    }
    
    size() {
        return this.length;
    }
}

// Functions

function swap(arr, i, j) {
    [arr[j], arr[i]] = [arr[i], arr[j]];
}

function partition(arr, left, right) {
    let pivot = arr[Math.floor((right + left)/2)];
    let i = left;
    let j = right;
    
    while(i <= j) {
        while(arr[i] < pivot)
            i++;
        while(arr[j] > pivot)
            j--;
        if(i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    
    return i;
}

function bubbleSort(arr) {
    let length = arr.length;
    
    for(let i = 0; i < length - 1; i++) 
        for(let j = 0; j < length - 1; j++) 
            if(arr[j] > arr[j + 1])
                swap(arr, j, j+1)
    
    return arr;
}

function insertionSort(arr) {
    let length = arr.length;
    let value, i, j;
    
    for(i = 0; i < length; i++) {
        value = arr[i];
        for(j = i-1; j > -1 && arr[j] > value; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = value;
    }
    
    return arr;
}

function quickSort(arr, left, right) {
    if(arr.length < 1)
        return arr;

    if(!left)
        left = 0;
    if(!right)
        right = arr.length - 1;
    
    let index = partition(arr, left, right);
    
    if(left < index - 1)
        quickSort(arr, left, index - 1);
    if(index < right)
        quickSort(arr, index, right);
    
    return arr;
}

const getElement    = s => document.querySelector(s);
const getElements   = s => document.querySelectorAll(s);
const getById       = i => document.getElementById(i);
const getByClass    = c => document.getElementsByClassName(c);