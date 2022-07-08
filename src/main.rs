#[derive(Debug)]
struct Test {
    a: i32,
    b: i32,
}

trait Search {
    fn search<R>(&self, search_by: &String) -> Vec<R>;
}

fn main() {
    println!("Hello, world!");
}
