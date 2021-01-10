//where the magic happens

//import stuff
import * as colors from "./colors"

//counting total changes for informative message to user
var countApplied = 0
var countTotal = 0

export function toTheme(theme, selection){

    if (selection.length != undefined || selection.length > 0){
        //loop through the selection
        for (var node of selection){
            doAll(theme, node)      
        }
    }
    else {
        doAll(theme, selection) 
    }
    return [countApplied, countTotal]
}

function doAll(theme, node){
    //determine if the node has a fills property
    var isValidNode = checkSelectionType(node)

    if (isValidNode){
        applyColor(theme, node)
        countApplied +=1
    }
    countTotal +=1

    //loop through sublayers
    if (node.type === "GROUP") {
        if (node.children.length > 0){
            for (var subNode of node.children){
                toTheme(theme, subNode)
            } 
        }
    }
    
    else if (node.type === "INSTANCE" || node.type === "FRAME"){   

        if (node.children.length > 0){
            for (var i = 0; i < node.children.length ; i++){
                var newNode = figma.getNodeById(node.children[i].id)
                toTheme(theme, newNode)
            } 
        } 
    } 
}

const validNodeTypes = ["FRAME", "INSTANCE", "VECTOR", "STAR", "LINE", "ELLIPSE", "POLYGON", "RECTANGLE", "TEXT", "BOOLEAN_OPERATION"]

function checkSelectionType(node){
    //if its one of the valid node types
    if (validNodeTypes.indexOf(node.type) != -1 ){
        return true
    }
    else {
        return false
    }
}

//return the flipped color to use
function getNewColor(theme, style){

    if (theme == "dark"){
        var indexLight = colors.themes.findIndex(o => o.light === style)

        if (indexLight!= -1 ){
            return colors.themes[indexLight].dark
        }
        else {
            return ""
        }
    }
    else if (theme === "light"){
        var indexDark = colors.themes.findIndex(o => o.dark === style)

        if (indexDark!= -1 ){
            return colors.themes[indexDark].light
        }
        else {
            return ""
        }
    }
    
    
}

//apply reverse color or elevation
function applyColor(theme, node){
    if (node.fillStyleId != ""){
        var newStyle = getNewColor(theme, node.fillStyleId)
        node.fillStyleId = newStyle
    }
    if (node.strokeStyleId != ""){
        var newStyle = getNewColor(theme, node.strokeStyleId)
        node.strokeStyleId = newStyle
    }
    if (node.effectStyleId != ""){
        var newStyle = getNewColor(theme, node.effectStyleId)
        node.effectStyleId = newStyle
    }
}


