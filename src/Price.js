const Price = ({value}) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export default Price