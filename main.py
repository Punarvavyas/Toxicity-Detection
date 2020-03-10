from flask import Flask, request, render_template

app = Flask(__name__)


@app.route('/checktoxicity/', methods=['POST'])
def check_toxicity():
    text = request.form['text']
    print(text)
    return render_template('search.html', text=text)

@app.route('/')
def index():
    return render_template('search.html')

@app.route('/analysis')
def analysis():
    return render_template('analysis.html')


if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(threaded=True, port=5000, debug=True)