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
