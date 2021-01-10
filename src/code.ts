
import * as msg from "./messages"
import * as flip from "./flip"
import * as colors from "./colors"

//run the plugin
main()

function main() {
    //get the current selection
    var selection = figma.currentPage.selection

    if (selection.length == 0){
        //inform the user to select something and re-run the plugin
        closePlugin(msg.noSelection)
        return

    }
    else{
        //determine what the user selected
        var convertTo = figma.command

        //import colors
        colors.importColors()
        .then(()=>{
            //apply the flip
            var counts = flip.toTheme(convertTo, selection)
            closePlugin(counts[0] + "/" + counts[1] + " layers have been flipped 🚀")
            return
        })
        .catch(error => {
            console.error(error)
        })
        

    }
}


//close the plugin with a message
function closePlugin(message: string) {
    figma.closePlugin(message)
    return
  }

