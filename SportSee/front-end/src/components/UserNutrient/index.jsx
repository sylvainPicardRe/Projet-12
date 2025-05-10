import '../../styles/Nutrient.scss'

function UserNutrient({ nutrient }) {
  return (
    <div className="nutrient">
      <img className="nutrient__icon" src={nutrient.icon} />
      <div className="nutrient__content">
        <div>{`${nutrient.value}${nutrient.unit}`}</div>
        <div>{nutrient.name}</div>
      </div>
    </div>
  )
}

export default UserNutrient
