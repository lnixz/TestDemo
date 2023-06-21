function isSubtree(tree, subtree) {

    return true;
}

// 示例用法：  
const tree = {
    a: 0,
    c: '',
    d: true,
    e: {
        f: 1,
        e: {
            e: 0,
            f: 2
        }
    }
};

const subtree1 = {
    a: 0,
    c: '',
    d: true,
    e: {
        e: 0,
        f: 2
    }
};

const subtree2 = {
    e: {
        f: 1,
        e: {
            e: 0,
            f: 2
        }
    }
};
console.log(isSubtree(tree, subtree1));
console.log(isSubtree(tree, subtree2));

const getDepth = (tree) => {return 0};
// tack:
/**
 * //定义一个方法用于判断某个对象是否为另一个对象的不完全子对象，假定该函数签名为 isSubtree(tree, subtree);
 * //
 * //方法体过程：
 * //0. 处理特殊情况，如果 tree 和 subtree 有一个为空，则直接判定为假。
 * //1. 首先分别遍历 tree 和 subtree 的属性集合，分别定义为 treeKeys 和 subtreekeys;
 * //2. 遍历 subtreeKeys ，检查每一个 key 是否存在与 treekeys 集合中，若有不存在的情况，则判定为空。
 * //3. 遍历 subtreeKeys ，检查每一个 subtree[key] 对应的值是否与 tree[key] 中对应的值相等，
 * //   若两个值都为基础类型变量且不相等，则判定为假。全部相等则判定为真。
 * //4. 若两个值中，tree[key] 为基本类型，subtree[key] 为引用类型，则判定为假。
 * //5. 若两个值 tree[key] 为引用类型......
 * //以上思路有漏洞。
 * 
 * TODO: 题目： 检查 a 是否为 b 的子对象。
 * 
 * 001. 需要一个 辅助函数 来判断对象的深度， 如果subtree 的深度大于 tree 的深度，
 *      则subtree 不可能为 tree 的子对象。
 * 
 * 002. 需要将 tree 中的所有子树 拆开保存到集合中待用，因为 tree 中的所有子对象都可能包含 subtree。
 *      (拆取子树过程中可根据深度进行优化，深度小于 subtree 的子树无需拆取，原因参考001.)
 * 
 * 003. 遍历拆取后的 集合，分别判断 subtree 是否为其子树，只需从根节点开始对比即可，
 *      因为其它层级的子树已经分别拆开判断。
 * 
 * 004. 若存在集合中对比存在一个子树即可认为 subtree 是 tree 的子树。
 */