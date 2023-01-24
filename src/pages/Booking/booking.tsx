import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import Nav from '../../ui-component/navigation/nav'
import PCard from '../../ui-component/purchase-card/card'
import { DataSchema, QueryManager } from '../../api/queryManager/query-manager';


const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    fontFamily: 'Montserrat',
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 12,
        fontFamily: 'Montserrat',
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

type queryType = "all" | "cat" | "search"
export default function BookingPage(){
    const [services, setServices] = React.useState([] as DataSchema[])
    const [queryType, setQueryType] = React.useState({type: 'all'} as {type: queryType, param?: string})
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e:any) => {
        console.log(typeof(e.target.innerText))
        if(e.target.innerText){
            if(e.target.innerText.toLowerCase() == 'all'){
                generateServiceForComponent("all")
                return
            }
            generateServiceForComponent("cat", (e.target.innerText).toLowerCase().replace(' ', '_'))
        }
        setAnchorEl(null);
    };

    const generateServiceForComponent = (type: queryType, param?: string) => {
        const query: QueryManager = new QueryManager()
        switch(type){
            case "all":
                const allData = query.queryData(2)
                setServices([...allData])
                break;
            case "cat":
                const data = query.queryCategory(param ? param : "")
                console.log(data)
                setServices([...data])
                break;
            default:
                break;
        }
    }

    React.useEffect(() => {
        generateServiceForComponent(queryType.type, queryType.param ? queryType.param : "")
    }, [])

    return(
        <React.Fragment>
           <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={e => handleClose(e)} disableRipple>
                    All
                </MenuItem>
                <MenuItem onClick={e => handleClose(e)} disableRipple>
                    Micro Services
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                    EyeLashes Extension
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                    Parity Test
                </MenuItem>
            </StyledMenu>
            <Nav />
            <div className="booking-page-container">
                <div className="wrapper">
                    <div className="header">
                        <div className="text-container">
                            <h5>Booking</h5>
                            <h3>Lorem ipsum dolor sit. </h3>
                        </div>
                        <div className="action">
                            <div className="search-bar">
                                <div className="icon">
                                   <SearchIcon />
                                </div>
                                <input type="text" name="search" id="" placeholder='search'/>
                            </div>
                            <div className="category-section">
                                <Button
                                    id="demo-customized-button"
                                    aria-controls={open ? 'demo-customized-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    variant="contained"
                                    disableElevation
                                    onClick={handleClick}
                                    sx={{backgroundColor: "#290f1496", fontFamily: "Montserrat"}}
                                    endIcon={<KeyboardArrowDownIcon />}
                                >
                                    
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="card-container">
                        {
                            services.length ? (
                                services.map(data => (
                                    <PCard
                                    id = {data.id}
                                    name = { data.name }
                                    price = {data.price}
                                    shortDescription = {data.description.slice(0, 60) + "..."}
                                    rating = {data.rating}
                                    duration = {data.duration}
                                    key = {data.id}
                                    />
                                ))
                            ) : (<h6>Result Not Found</h6>)
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


