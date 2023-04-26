import { alpha,makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme)=>({
    title:{
        display:'none',
        [theme.breakpoints.up('sm')]:{
            display:'block'
        },
    },
    
    search:{
        position:'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor:alpha(theme.palette.common.white),


    }
}))