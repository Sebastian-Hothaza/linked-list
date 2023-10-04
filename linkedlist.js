const NodeFactory = (value, next) => {
    return { value:value||null, next:null};
};

const LinkedListFactory = () => {
    let HEAD = null; // Points at the current head of the linked list
    let length = 0;


    const head = () => {
        if (HEAD === null) return null;
        return HEAD.value;
    };

    const tail = () => {
        if (HEAD === null) return null;
        let ptr = HEAD;
        while (ptr.next){
            ptr = ptr.next;
        }
        return ptr.value;
    }

    const toString = () => {
        if (HEAD === null) return (console.log("Empty"));
        let ptr = HEAD;
        let result = "";
        while (ptr !== null){
            result += ("("+ptr.value+")->");
            ptr = ptr.next;
        }
        result += "NULL";
        return (console.log(result));
    }

    const append = (value) => {
        length++;
        const newNode = NodeFactory(value);
        if (HEAD === null) return (HEAD = newNode);
        let ptr = HEAD;
        while (ptr.next !== null){
            ptr = ptr.next;
        }
        ptr.next = newNode;
    };

    const prepend = (value) => {
        length++;
        const newNode = NodeFactory(value);
        if (HEAD === null) return (HEAD=newNode);
        newNode.next = HEAD;
        HEAD = newNode;
    };

    const size = () => {
        return length;
    };

    const at = (idx) => {
        if (idx >= length) return null;
        let cur = HEAD;
        for (let i=0; i<idx; i++){
            cur = cur.next;
        }
        return cur.value;
    }

    const pop = () => {
        if (HEAD === null) return;
        if (length === 1) return (HEAD = null)
        let ptr = HEAD;
        for (let i=1; i<length-1; i++){
            ptr = ptr.next;
        }
        ptr.next = null;
        length--;
    }

    const contains = (value) => {
        if (!HEAD) return false;
        let ptr = HEAD;
        if (ptr.value === value) return true;
        while (ptr.next){
            if (ptr.value === value) return true;
            ptr = ptr.next;
        }
        if (ptr.value === value) return true;
        return false;
    }

    const find = (value) => {
        if (!HEAD) return false;
        let ptr = HEAD;
        let iter = 0;
        if (ptr.value === value) return iter;
        while (ptr.next){
            
            if (ptr.value === value) return iter;
            ptr = ptr.next;
            iter++;
        }
        if (ptr.value === value) return iter;
        return null;
    }

    const insertAt = (value,index) => {
        if (index > length) return;

        if (index == 0){
            prepend(value);
            return;
        }
        
        let ptr = HEAD;
        for (let i=1; i<index; i++){
            console.log("asd");
            ptr = ptr.next;
        }
        // ptr is now at the node prior to where we want to insert
        let newNode = NodeFactory(value);
        let backup = ptr.next;
        newNode.next = ptr;
        ptr.next = newNode;
        newNode.next = backup;
        length++;
    }

    const removeAt = (index) => {
        if (index > length) return;
        if (index==0){
            HEAD = HEAD.next;
            return;
        }
        
        let ptr = HEAD;
        for (let i=1; i<index; i++){
            ptr = ptr.next;
        }
        // ptr is now at the node prior to where we want to remove
        let deadNode = ptr.next;
        ptr.next = deadNode.next;
    }

    return {head, tail, toString, append, prepend, size, at, pop, contains, find, insertAt, removeAt}
}


const myList = LinkedListFactory();



myList.append(1);
myList.prepend(2);
myList.append(3);
myList.prepend(4);
myList.append(5);
myList.toString(); // 4 2 1 3 5


myList.insertAt(9,0);
myList.toString();

myList.removeAt(5);
myList.toString();

