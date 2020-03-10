from flask import Flask, request, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('search.html')

@app.route('/report/', methods=['GET'])
def report():
    searchText = request.args.get('searchText')
    print(searchText)
    return render_template('report.html', text=searchText)

@app.route('/analysis')
def analysis():
    return render_template('analysis.html')


if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(threaded=True, port=5000, debug=True)