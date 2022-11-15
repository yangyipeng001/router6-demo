// ! 如 ///product/detail/// -> /product/detail
export const normallizePathname = (pathname) => {
    return pathname.replace(/\/+s/, '').replace(/^\/*/, '/')
}