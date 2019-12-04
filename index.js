(function(){
    var data = [];

    if(document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bindEvents)
    } else {
        bindEvents();
    }

    // set up the bindings
    function bindEvents(){
        document.querySelector('#pre').addEventListener('click', () => {
            handleTraversal(preorder)
        })
        document.querySelector('#in').addEventListener('click', () => {
            handleTraversal(inorder)
        })
        document.querySelector('#post').addEventListener('click', () => {
            handleTraversal(postorder)
        })
    }

    function handleTraversal(cb) {
        data = [];
        cb(document.querySelector('html'))
        console.log(data);
    }

    function preorder(root){
        if(root) {
            if(root.tagName) data.push(root.tagName)
            for(let i = 0; i < root.childNodes.length; i++) preorder(root.childNodes[i]);
        }
    }
    function inorder(root){
        if(root) {
            let mid = Math.round(root.childNodes.length/2);
            for(let i = 0; i < mid; i++) inorder(root.childNodes[i])
            if(root.tagName) data.push(root.tagName)
            for(let i = mid; i < root.childNodes.length; i++) inorder(root.childNodes[i])
        }
    }
    function postorder(root){
        if(root) {
            for(let i = 0; i < root.childNodes.length; i++) postorder(root.childNodes[i]);
            if(root.tagName) data.push(root.tagName)
        }
    }
})();
