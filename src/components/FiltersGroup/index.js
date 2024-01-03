import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    categories,
    ratings,
    updateCategory,
    updateRating,
    updateSearch,
    searchValue,
    onClickEnter,
    onClickClearFilters,
    activeCategoryId,
    activeRatingId,
  } = props
  const getCategoriesList = () =>
    categories.map(eachCat => {
      const onClickingCategory = () => {
        updateCategory(eachCat.categoryId)
      }
      const catClass =
        activeCategoryId === eachCat.categoryId ? 'active' : 'n-active-cat'

      return (
        <li
          onClick={onClickingCategory}
          className={catClass}
          key={eachCat.categoryId}
        >
          <p>{eachCat.name}</p>
        </li>
      )
    })

  const getRatingsList = () =>
    ratings.map(eachRat => {
      const onClickingRating = () => {
        updateRating(eachRat.ratingId)
      }
      const ratClass =
        activeRatingId === eachRat.ratingId ? 'active' : 'n-active-rat'

      return (
        <li
          onClick={onClickingRating}
          key={eachRat.ratingId}
          className="rat-item"
        >
          <img
            src={eachRat.imageUrl}
            alt={`rating ${eachRat.ratingId}`}
            className="stars"
          />
          <p className={ratClass}>& up</p>
        </li>
      )
    })

  const onSearching = event => {
    updateSearch(event.target.value)
  }

  const onClickingEnter = event => {
    if (event.key === 'Enter') {
      onClickEnter()
    }
  }

  const onClickingClearFilters = () => {
    onClickClearFilters()
  }

  return (
    <div className="filters-group-container">
      <div className="search-cont">
        <input
          type="search"
          value={searchValue}
          placeholder="search"
          onChange={onSearching}
          onKeyDown={onClickingEnter}
          className="search-bar"
        />
        <BsSearch />
      </div>
      <h1 className="f-head">Category</h1>
      <ul className="cat-list">{getCategoriesList()}</ul>
      <h1 className="f-head">Rating</h1>
      <ul className="rat-list">{getRatingsList()}</ul>
      <button
        type="button"
        onClick={onClickingClearFilters}
        className="clear-filter-butt"
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
