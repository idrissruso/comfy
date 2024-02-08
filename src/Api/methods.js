const API_URL = 'http://127.0.0.1:8000/'

export async function getFeaturedProducts() {
  try {
    const response = await fetch(`${API_URL}product/featured/`)
    const { products } = await response.json()
    return products
  } catch (error) {
    throw error
  }
}

export async function getProductByPage(page) {
  try {
    const response = await fetch(`${API_URL}product/page/${page}/`)
    const { products } = await response.json()
    return products
  } catch (error) {
    throw error
  }
}

export async function getProducts() {
  try {
    const response = await fetch(`${API_URL}product/all/`)
    const { products } = await response.json()
    return products
  } catch (error) {
    throw error
  }
}

export async function getProductById(id) {
  try {
    const response = await fetch(`${API_URL}product/${id}/`)
    const { product } = await response.json()
    return product
  } catch (error) {
    throw error
  }
}

export async function getCategoryById(id) {
  try {
    const response = await fetch(`${API_URL}category/${id}/`)
    const { category } = await response.json()
    return category.name
  } catch (error) {
    throw error
  }
}

export async function login({ username, password }) {
  try {
    const response = await fetch(`${API_URL}auth/api/token/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    const data = await response.json()
    return { status: response.status, data }
  } catch (error) {
    throw error
  }
}

export async function register({ username, email, password1 }) {
  try {
    const response = await fetch(`${API_URL}auth/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password1,
        password2: password1,
      }),
    })
    const data = await response.json()
    console.log('data', data)
    return { status: response.status, data }
  } catch (error) {
    console.log('error', error)
    throw error
  }
}

export async function getCategories() {
  try {
    const response = await fetch(`${API_URL}category/all/`)
    const { categories } = await response.json()
    return categories
  } catch (error) {
    throw error
  }
}

export async function getProductsByCategoryPage(categoryId, page = 1) {
  try {
    const response = await fetch(
      `${API_URL}product/category/${categoryId}/${page}/`
    )
    const { products } = await response.json()
    return products
  } catch (error) {
    throw error
  }
}

export async function getProductsByCategory(categoryId) {
  try {
    const response = await fetch(`${API_URL}product/category/${categoryId}/`)
    const { products } = await response.json()
    return products
  } catch (error) {
    throw error
  }
}
