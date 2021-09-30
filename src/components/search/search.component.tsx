import React, { ChangeEvent, useState } from 'react'

export type TSearchProp = {
  onChange: Function
}

const Search: React.FC<TSearchProp> = (prop: TSearchProp) => {
  const [searchText, setSearchText] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setSearchText(event.target.value)
    if (prop.onChange) prop.onChange(searchText)
  }

  return (
    <div className="p-8">
      <div className="bg-white flex items-center rounded-full shadow-xl">
        <input
          className="rounded-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
          id="search"
          type="text"
          placeholder="Search"
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default Search
