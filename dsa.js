class Node {
    constructor(data){
        this.prev = null
        this.data = data
        this.next = null
    }
}



class DList{
    constructor(){
        this.head = null

        this.tail = null
    }


    isEmpty(){
        if (this.head === null){
            return true
        }
        return false
    }


    insertAtFront(data){
        let newNode = new Node(data)
        if (this.isEmpty()){
            this.head = newNode
            this.tail = newNode
        } else{
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
    }



    insertAtEnd(data){
        let newNode = new Node(data)
        if (this.isEmpty()){
            this.head = newNode
            this.tail = newNode
        } else{
            newNode.prev = this.tail
            this.tail.next = newNode
        }
    }

    insertAtPosition(data, position){

        if (position === 1){
            this.insertAtFront(data)
            return
        }

        let currentNode = this.head
        let counter = 1

        if (currentNode !== null && counter < position -1){
            current = currentNode.next

            counter+=1
        }


        
    }


    displayAll(){
        if(!this.isEmpty()){
            let temp = this.head
            while(temp !== null){
                console.log(`${temp.data}`)
                temp = temp.next
            }
        }     }
}


let List = new DList()
List.insertAtEnd(1)
// List.insertAtEnd(2)
// List.insertAtFront(3)

List.displayAll()